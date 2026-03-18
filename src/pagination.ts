const PER_PAGE = 12;

export default class Pagination {
  private readonly perPage: number;
  private page: number;

  constructor(perPage = PER_PAGE) {
    this.perPage = perPage;
    this.page = 1;
  }

  public reset(): void {
    this.page = 1;
  }

  public nextPage(): number {
    return ++this.page;
  }

  public get currentPage(): number {
    return this.page;
  }

  public get itemsPerPage(): number {
    return this.perPage;
  }
}
