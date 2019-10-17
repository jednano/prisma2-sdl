Blocks = blocks:ModelBlock* {
  return {
    type: 'Prisma Schema',
    version: '2.0.0',
    blocks,
  }
}

ModelBlock =
	_ 'model'
	_ name:Identifier
	_ '{' fields:Field* '}'
	_ {
  return {
    type: 'Model',
    name,
    fields,
  }
}

Field =
	_ name:Identifier
	_ type:(DataType / Identifier)array:'[]'?optional:'?'?
	_ attributes:FieldAttribute*
	_ {
  return {
    type,
    name,
    ...(attributes.length ? { attributes } : []),
    ...(optional ? { optional: true } : {}),
    ...(array ? { array: true } : {}),
  }
}

DataType = 'String' / 'Boolean' / 'Int' / 'Float' / 'DateTime'

String = "'" Identifier "'" / '"' Identifier '"'

FieldAttribute = '@'name:'id' {
	return {
		type: 'FieldAttribute',
		name,
	}
}

Identifier = $([a-z]i+)

_ "whitespace" = [ \t\n\r]*
