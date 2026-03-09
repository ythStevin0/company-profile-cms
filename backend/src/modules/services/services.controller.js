import serviceService from './services.service.js';

export const getServices = async (req, res) => {
    try {
        const services = await serviceService.getAllServices();
        res.json({ success: true, data: services });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createService = async (req, res) => {
    try {
        const service = await serviceService.createService(req.body);
        res.status(201).json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateService = async (req, res) => {
    try {
        const service = await serviceService.updateService(req.params.id, req.body);
        res.json({ success: true, data: service });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteService = async (req, res) => {
    try {
        await serviceService.deleteService(req.params.id);
        res.json({ success: true, message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};