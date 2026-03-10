import portfolioService from './portfolio.service.js';

export const getPortfolios = async (req, res) => {
    try {
        const portfolios = await portfolioService.getAllPortfolios();
        res.json({ success: true, data: portfolios });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createPortfolio = async (req, res) => {
    try {
        const portfolio = await portfolioService.createPortfolio(req.body);
        res.status(201).json({ success: true, data: portfolio });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updatePortfolio = async (req, res) => {
    try {
        const portfolio = await portfolioService.updatePortfolio(req.params.id, req.body);
        res.json({ success: true, data: portfolio });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deletePortfolio = async (req, res) => {
    try {
        await portfolioService.deletePortfolio(req.params.id);
        res.json({ success: true, message: 'Portfolio deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};