import ModelBlock from './ModelBlock'

/**
 * @see https://github.com/prisma/specs/tree/master/schema
 */
export default interface PrismaSchema {
	type: 'Prisma Schema'
	/**
	 * @example "2.0.0"
	 */
	version: string
	blocks: ModelBlock[]
}
