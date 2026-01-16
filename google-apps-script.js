const SPREADSHEET_ID = '1z9CByNbwgyW8ohiwfxHHBRl51vK5oqu_Nd4ECe2K9MI';

const SHEET_NAME = 'leadsnovo';

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp',
        'Nome',
        'WhatsApp',
        'Marca/Instagram',
        'Faturamento Mensal',
        'Investimento Mensal',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'utm_id',
        'utm_source_platform',
        'utm_creative_format',
        'utm_marketing_tactic',
        'gclid',
        'fbclid',
        'ref',
        'source',
        'url_completa',
        'user_agent'
      ]);
    }
    
    let data = {};
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      const params = e.parameters || e.parameter || {};
      for (let key in params) {
        data[key] = Array.isArray(params[key]) ? params[key][0] : params[key];
      }
    }
    
    const row = [
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.whatsapp || '',
      data.marca_instagram || '',
      data.faturamento_mensal || '',
      data.investimento_mensal || '',
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || '',
      data.utm_term || '',
      data.utm_content || '',
      data.utm_id || '',
      data.utm_source_platform || '',
      data.utm_creative_format || '',
      data.utm_marketing_tactic || '',
      data.gclid || '',
      data.fbclid || '',
      data.ref || '',
      data.source || '',
      data.url_completa || '',
      data.user_agent || ''
    ];
    
    sheet.appendRow(row);
    
    return HtmlService.createHtmlOutput(
      '<html><body><script>window.top.postMessage({success: true}, "*");</script><p>Sucesso!</p></body></html>'
    ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      
  } catch (error) {
    return HtmlService.createHtmlOutput(
      '<html><body><script>window.top.postMessage({success: false, error: "' + error.toString().replace(/"/g, '\\"') + '"}, "*");</script></body></html>'
    ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script está funcionando!')
    .setMimeType(ContentService.MimeType.TEXT);
}
