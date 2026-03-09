import Service from './services.model.js';

const getAllServices = async () => {
    return await Service.find();
};

const createService = async (data) => {
    const service = new Service(data);
    return await service.save();
};

const updateService = async (id, data) => {
    return await Service.findByIdAndUpdate(id, data, { new: true });
};

const deleteService = async (id) => {
    return await Service.findByIdAndDelete(id);
};

export default { getAllServices, createService, updateService, deleteService };