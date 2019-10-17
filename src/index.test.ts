import test from 'ava'

import { parse } from '.'

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

test('parse(schema) returns expected AST', t => {
	const schema = `model User {
	id     Int @id
	name   String
	email  String
	age    Int?
	posts  Post[]
}

model Post {
	id       Int @id
	title    String
	content  String
	author   User
}`
	t.snapshot(parse(schema))
})
