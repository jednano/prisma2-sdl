import { readFileSync } from 'fs'
import { join as pathJoin } from 'path'
import { generate } from 'pegjs'

import PrismaSchema from './@types/PrismaSchema'
import ModelBlock, { ModelField } from './@types/ModelBlock'

const parser = generate(
	readFileSync(pathJoin(__dirname, 'grammar.pegjs')).toString(),
)

/**
 * Parses a subset of the Prisma2 schema definition language.
 */
export function parse(schema: string): PrismaSchema {
	if (typeof schema === 'string' || [null, undefined].includes(schema)) {
		return parser.parse(schema || '')
	}

	throw new TypeError('expected a string')
}

type Block = ModelBlock

const indent = '  '

const blockPrettifiers = {
	Model: (model: ModelBlock, depth: number) => `${indent.repeat(depth)}model ${
		model.name
	} {
${indent.repeat(depth + 1)}${prettifyModelFields(model.fields, depth + 1)}
}
`,
}

/**
 * Prettifies AST according to [formatting rules](https://bit.ly/2oH2WIr).
 */
export function prettify(ast: PrismaSchema, depth = 0) {
	if (!ast || !ast.blocks) {
		throw new TypeError('expected AST')
	}

	return prettifyBlocks(ast.blocks, depth)
}

function prettifyBlocks(blocks: Block[], depth: number) {
	return blocks.map(b => blockPrettifiers[b.type](b, depth)).join('\n')
}

function prettifyModelFields(fields: ModelField[], depth: number) {
	const names = fields.map(f => f.name)
	const types = fields.map(
		f => `${f.type}${f.array ? '[]' : ''}${f.optional ? '?' : ''}`,
	)
	const nameWidth = maxWidth(names)
	const typeWidth = maxWidth(types)
	const attrs = fields.map(f =>
		f.attributes
			? f.attributes
					.map(a => `@${a.name}`)
					.join(`\n${indent.repeat(depth)}${' '.repeat(nameWidth + typeWidth)}`)
			: '',
	)

	return names
		.map((name, i) =>
			[expand(name, nameWidth), expand(types[i], typeWidth), attrs[i]]
				.filter(Boolean)
				.join('  ')
				.trimEnd(),
		)
		.join('\n  ')

	function maxWidth(list: string[]) {
		return Math.max(...list.map(s => s.length))
	}

	function expand(text: string, width: number) {
		return `${text}${' '.repeat(width - text.length)}`
	}
}
