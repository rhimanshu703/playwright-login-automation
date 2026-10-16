export class SuccessPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.successMessage = page.getByText('Congratulations');
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async logout() {
    await this.logoutButton.click();
  }
}
