export default class Poem {
    constructor(
        public id: number,
        public categoryId: number,
        public title: string,
        public text: string
    ) {}
}