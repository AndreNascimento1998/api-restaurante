
export class LanchesRepository {
    private itens = []

    save(item) {
        this.itens.push(item)
    }

    fetch() {
        return this.itens
    }
}