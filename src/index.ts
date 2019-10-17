import * as linez from 'linez'

/**
 * @returns [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
 */
export function parse(schema: string) {
	if (
		[null, undefined].includes(
			// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
			// @ts-ignore
			schema,
		)
	) {
		return []
	}

	if (typeof schema !== 'string') {
		throw new TypeError('expected a string')
	}

	return linez(schema || '').lines.reduce(prev => {
		return prev
	}, [])
}
