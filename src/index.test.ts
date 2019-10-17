import test from 'ava'

import foo from '.'

test('foo() returns "bar"', t => {
	t.is(foo(), 'bar')
})
