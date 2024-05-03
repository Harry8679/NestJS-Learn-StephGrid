import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/az')
    getRootRoute() {
        return 'Hi there';
    }

    @Get('/emarh')
    getByThere() {
        return 'Get By there';
    }
}