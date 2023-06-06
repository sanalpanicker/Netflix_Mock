import { Magic } from "magic-sdk";

class AuthService {
  #magic;
  user;
  isAuthenticated = false;
  constructor() {
    this.init();
  }

  private init() {
    if (typeof window !== "undefined") {
      if (!this.#magic && !this.isAuthenticated) {
        this.#magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY, {
          network: "mainnet",
        });
      }
    } else {
      this.#magic = undefined;
    }
  }

  public async logOut() {
    await this.#magic.user.logout();
    this.#magic = undefined;
    this.user = undefined;
    this.isAuthenticated = false;
  }

  public async isLoggedIn() {
    return await this.#magic.user.isLoggedIn();
  }

  public async setUser() {
    const { email: emailId, publicAddress } =
      await this.#magic?.user?.getMetadata();
    console.log("user", emailId);
    this.isAuthenticated = true;
    this.user = {
      emailId,
      publicAddress,
    };
  }

  public async login(email: string) {
    console.log(`yo you are called ${email}`);
    const token = await this.#magic?.auth?.loginWithEmailOTP({
      email,
    });
    console.log(token);
    await this.setUser();
    return token;
  }

  public async logout() {}
}

export default new AuthService();
