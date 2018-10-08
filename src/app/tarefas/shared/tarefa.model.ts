export class Tarefa {

	constructor(
		public id?: number,
		public nome?: string,
		public descricao?: string,
		public situacao?: string,
		public qtdGostou?: number,
		public qtdNaoGostou?: number,
		public comentario?: string []) {}
}
