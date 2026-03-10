import Portfolio from './portfolio.model.js';

const getAllPortfolios = async () => {
    return await Portfolio.find();
};

const createPortfolio = async (data) => {
    const portfolio = new Portfolio(data);
    return await portfolio.save();
};

const updatePortfolio = async (id, data) => {
    return await Portfolio.findByIdAndUpdate(id, data, { new: true });
};

const deletePortfolio = async (id) => {
    return await Portfolio.findByIdAndDelete(id);
};

export default { getAllPortfolios, createPortfolio, updatePortfolio, deletePortfolio };