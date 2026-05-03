
export class BaseController {
    success(res, statusCode = 200, message, data=null) {
        res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }

    error(res, statusCode = 500, message) {
        res.status(statusCode).json({
            success: false,
            message
        });
    }
}