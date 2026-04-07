import { authService } from '../auth-service'

describe('authService', () => {
  describe('login()', () => {
    it('deve retornar token e dados do usuário com credenciais corretas', async () => {
      const response = await authService.login({
        email: 'testerson@teste.com',
        password: 'adm123',
      })

      expect(response.token).toBeTruthy()
      expect(response.user.name).toBe('Testerson')
      expect(response.user.email).toBe('testerson@teste.com')
      expect(response.user.avatar).toBeTruthy()
    })

    it('deve lançar erro com e-mail incorreto', async () => {
      await expect(
        authService.login({ email: 'errado@teste.com', password: 'adm123' })
      ).rejects.toThrow()
    })

    it('deve lançar erro com senha incorreta', async () => {
      await expect(
        authService.login({ email: 'testerson@teste.com', password: 'senhaerrada' })
      ).rejects.toThrow()
    })

    it('deve lançar erro com credenciais em branco', async () => {
      await expect(
        authService.login({ email: '', password: '' })
      ).rejects.toThrow()
    })

    it('deve retornar token no formato correto', async () => {
      const response = await authService.login({
        email: 'testerson@teste.com',
        password: 'adm123',
      })

      expect(typeof response.token).toBe('string')
      expect(response.token.length).toBeGreaterThan(0)
    })
  })
})
