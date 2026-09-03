import { DeputadoService } from '../services/deputadosService.js';

export const DeputadoController = {
  listar: async (req, res, next) => {
    try {
      const { nome, siglaUf, siglaPartido, itens, pagina } = req.query;

      const deputados = await DeputadoService.listar({
        nome,
        siglaUf,
        siglaPartido,
        itens,
        pagina,
      });

      return res.status(200).json(deputados);
    } catch (err) {
      next(err);
    }
  },

  buscarPorId: async (req, res, next) => {
    try {
      const { id } = req.params;

      const deputado = await DeputadoService.buscarPorId(id);

      if (!deputado) {
        return res.status(404).json({ error: 'Deputado não encontrado' });
      }

      return res.status(200).json(deputado);
    } catch (err) {
      next(err);
    }
  },
};