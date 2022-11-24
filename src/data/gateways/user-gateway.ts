export class UserGateway {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: HttpClient
  ) {}

  async getAll(): User[] {
    const usersResponse = await this.httpClient.get(`${this.baseUrl}/users`);
    usersResponse.map((userResponse) => UserFactory.create(userResponse));
  }

  async getOne(id: string): User {
    const userResponse = await this.httpClient.get(`${this.baseUrl}/users`);
    const transformedUser = new UserGatewayResponseDto(userResponse);
    // UserGateayResponseDto

    return userFactory.create(userResponse);
  }
}
