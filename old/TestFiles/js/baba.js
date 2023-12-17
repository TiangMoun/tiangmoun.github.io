new Level(
    `1,1,1
    1,1,1
    1,1,1
    1,1,1
    1,1,1
    `
)
class Block {
    constructor(level, position) {
        this.id = this.constructor.name.toUpperCase()
        this.level = level
        this.position = position
    }

    getRow() {
        return this.level.board[this.position.row]
    }

    getCell() {
        return this.getRow()[this.position.cell]
    }
}

class Noun extends Block {
    type = 'noun'
    hasProperty(property) { }
}

class Operator extends Block {
    type = 'operator'
}

class Property extends Block {
    type = 'property'

    static onBeforeLand() { return true }
    static onAfterLand() { }
}
class Baba extends Noun { }
class Is extends Operator { }
class You extends Property { }
class Hot extends Property { }
class Push extends Property { }
class Text extends Property {
    // to reference the actual object. 
    // e.g. The ref for the text BABA is an instance of the object BABA
    ref = null
}