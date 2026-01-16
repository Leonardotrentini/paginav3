# ✅ CHECKPOINT - Página de Captura VESTO CO.

**Data:** 2025-01-16  
**Status:** ✅ FUNCIONANDO - Totalmente Integrado

---

## 📋 Resumo do Projeto

Página de captura otimizada para VESTO CO. com integração completa ao Google Sheets e Meta Pixel do Facebook.

---

## 🔗 Integrações Configuradas

### Google Sheets
- **Planilha:** `1z9CByNbwgyW8ohiwfxHHBRl51vK5oqu_Nd4ECe2K9MI`
- **Aba:** `leadsnovo`
- **Google Apps Script URL:** `https://script.google.com/macros/s/AKfycby4Lat7AIJzYBciD8iignL90IiWbxjLU_SeZQxDtMBzGGwtD9wdhrmZx8y_A0UoxRtv/exec`

### Meta Pixel (Facebook)
- **Pixel ID:** `1925661201147040`
- **Evento:** PageView (automático)
- **Status:** ✅ Instalado no `<head>`

---

## 📝 Campos do Formulário

1. **Nome** (obrigatório)
2. **Email** (obrigatório)
3. **WhatsApp** (obrigatório)
4. **Marca/Instagram** (opcional)
5. **Faturamento Mensal** (select - obrigatório)
   - Até 10k
   - 10-30k
   - 30-50k
   - 50-80k
   - +100k Mês
6. **Investimento Mensal** (select - obrigatório)
   - Menos de 1k
   - Até 3k
   - Até 6k
   - Até 10k
   - +10k Mês

---

## 📊 Dados Capturados Automaticamente

### Tracking Automático
- `timestamp` - Data/hora do envio
- `utm_source` - Origem do tráfego
- `utm_medium` - Meio de comunicação
- `utm_campaign` - Campanha
- `utm_term` - Termo de busca
- `utm_content` - Conteúdo
- `utm_id` - ID da campanha
- `utm_source_platform` - Plataforma de origem
- `utm_creative_format` - Formato criativo
- `utm_marketing_tactic` - Tática de marketing
- `gclid` - Google Click ID
- `fbclid` - Facebook Click ID
- `ref` - Referrer (de onde veio)
- `source` - Fonte detectada (google, facebook, etc)
- `url_completa` - URL completa da página
- `user_agent` - Navegador e dispositivo

---

## 🎬 Vídeos Integrados

### Vídeo 1
- **URL:** https://youtube.com/shorts/91PgdPhhsNo
- **Título:** Moda Masculina
- **Descrição:** Vest Atacado - de 18 para 180k Mensal

### Vídeo 2
- **URL:** https://youtube.com/shorts/BwLXIPatTHA
- **Título:** Moda feminina
- **Descrição:** Lenny Fashion - 1 ANO de Parceria

---

## 🎨 Design

- **Tema:** Escuro com dourado (#D4AF37)
- **Background:** Verde escuro (#06231a)
- **Fontes:** Playfair Display (títulos) + Inter (texto)
- **Responsivo:** ✅ Mobile-first

---

## 🔘 Botões CTA

Todos os botões direcionam para o formulário:
- "Falar com Especialista" (topo)
- "Quero estes resultados" (depoimentos)
- "Começar Transformação" (seção final)
- "QUERO CRESCER MINHA LOJA" (submit do formulário)

---

## 📁 Estrutura de Arquivos

```
lpcodigo/
├── code.html                    # Página principal
├── google-apps-script.js        # Código do Apps Script
├── iniciar-servidor.bat         # Servidor local
└── screen.png                   # Referência de imagem
```

---

## 🚀 Como Usar

### Desenvolvimento Local
1. Execute `iniciar-servidor.bat`
2. Acesse: `http://localhost:8000/code.html`

### Produção
- Fazer deploy na Vercel ou servidor web
- Usar HTTPS (obrigatório para Meta Pixel)

---

## ⚙️ Configurações Técnicas

- **Formato de envio:** Form-urlencoded (via HTML form)
- **Método:** POST para Google Apps Script
- **Resposta:** HTML com postMessage para comunicação iframe

---

## ✅ Status de Testes

- ✅ Formulário funcionando
- ✅ Integração Google Sheets OK
- ✅ Dados chegando na planilha
- ✅ Meta Pixel instalado
- ✅ Tracking automático funcionando
- ✅ Vídeos YouTube integrados

---

## 📝 Notas Importantes

1. **Servidor Local:** Sempre testar via `http://localhost` e não `file://`
2. **Google Apps Script:** Deve estar publicado como "Qualquer pessoa, mesmo anônimo"
3. **Meta Pixel:** Funciona apenas em produção (HTTPS) ou localhost
4. **Planilha:** A aba "leadsnovo" será criada automaticamente se não existir

---

## 🔄 Próximos Passos (Opcional)

- [ ] Adicionar evento `Lead` no Meta Pixel quando formulário for enviado
- [ ] Deploy na Vercel
- [ ] Otimizações adicionais de performance (FCP < 2s)
- [ ] Integração com email marketing (RD Station, Mailchimp)

---

**Checkpoint criado com sucesso!** 🎉
