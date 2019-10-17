import test from 'ava'
import { readFileSync } from 'fs'
import { join as pathJoin } from 'path'

import { parse, prettify } from '.'

test('parse() returns empty blocks', t => {
	t.snapshot(
		// @ts-ignore
		parse(),
	)
})

test('parse(null) returns empty blocks', t => {
	t.snapshot(
		// @ts-ignore
		parse(null),
	)
})

test('parse("") returns empty blocks', t => {
	t.snapshot(parse(''))
})

test('parse(42) throws a TypeError', t => {
	t.throws(() => {
		// @ts-ignore
		parse(42)
	}, TypeError)
})

{
	const schema = readFixture('schema')
	const ast = parse(schema)

	test('parse(schema) returns expected AST', t => {
		t.snapshot(ast)
	})

	test('parse(uglySchema) returns same AST', t => {
		t.deepEqual(parse(readFixture('uglySchema')), ast)
	})

	test('prettify() throws a TypeError', t => {
		t.throws(() => {
			// @ts-ignore
			prettify()
		}, TypeError)
	})

	test('prettify({}) throws a TypeError', t => {
		t.throws(() => {
			// @ts-ignore
			prettify({})
		}, TypeError)
	})

	test('prettify(ast) returns properly-formatted text', t => {
		t.is(prettify(ast), schema)
	})
}

function readFixture(name: string) {
	return readFileSync(pathJoin(__dirname, 'fixtures', name)).toString()
}
