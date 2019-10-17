import { readFileSync } from 'fs'
import { join as pathJoin } from 'path'
import { generate } from 'pegjs'

import PrismaSchema from './@types/PrismaSchema'

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
