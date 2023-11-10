import { v4 as uuidV4 } from "uuid";

export function includeUUID(arrayMock) {
    return arrayMock.map(object => {
        object.id = uuidV4()
        return object
    })
}

export function newUUID() {
    return uuidV4()
}