import { config } from '../config.js';

export const DeputadoService = {
  listar: async (filtros = {}) => {
    const url = new URL(`${config.CAMARA_API_URL}/deputados`);
    
    
    Object.entries(filtros).forEach(([chave, valor]) => {
      if (valor !== undefined) url.searchParams.append(chave, valor);
    });

    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`Falha ao buscar deputados: ${res.status}`);
    
    const body = await res.json();
    return body.dados; 
  },

  buscarPorId: async (id) => {
    const res = await fetch(`${config.CAMARA_API_URL}/deputados/${id}`, {
      headers: { Accept: 'application/json' },
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Falha ao buscar deputado ${id}: ${res.status}`);

    const body = await res.json();
    return body.dados;
  }
};