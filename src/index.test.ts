import test from 'ava'

import { parse } from '.'

test('parse() returns an empty array', t => {
	t.deepEqual(
		// @ts-ignore
		parse(),
		[],
	)
})

test('parse(null) returns an empty array', t => {
	t.deepEqual(
		// @ts-ignore
		parse(null),
		[],
	)
})

test('parse("") returns an empty array', t => {
	t.deepEqual(parse(''), [])
})

test('parse(42) throws a TypeError', t => {
	t.throws(() => {
		// @ts-ignore
		parse(42)
	}, TypeError)
})
