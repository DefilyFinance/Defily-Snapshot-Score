import express from 'express';
import scores, { blockNumByNetwork } from './scores';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(blockNumByNetwork);
});

router.post('/scores', async (req, res) => {
  const { params } = req.body;
  const { space = '', network, snapshot = 'latest', strategies, addresses } = params;

  let result;
  try {
    // console.log("space", space)
    // console.log("network", network)
    // console.log("snapshot", snapshot)
    // console.log("strategies", strategies)
    // console.log("addresses", addresses)

    result = await scores(
      {},
      {
        space,
        network,
        snapshot,
        strategies,
        addresses
      }
    );
  } catch (e) {
    // console.log(e)
    return res.status(500).json({
      jsonrpc: '2.0',
      error: {
        code: 500,
        data: e
      }
    });
  }

  return res.json({
    jsonrpc: '2.0',
    result
  });
});

export default router;
