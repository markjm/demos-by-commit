const A = {
    id: undefined
} as { id: boolean | undefined } | undefined

type B = { C: boolean }

// doesnt work because A can still be undefined
// also does not "finish" - each wave will add an additional !
const B1: B = {
    C: A && A.id // -> A && A.id! -> A && A.id!!
}

// works because ! at end covers the "whole" expression
const B2: B = {
    C: A?.id // -> A?.id!
}