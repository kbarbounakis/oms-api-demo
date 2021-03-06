
import HttpBaseController from '@themost/web/controllers/base';
import {httpController,httpGet,httpAction} from '@themost/web/decorators';

@httpController()
export default class RootController extends HttpBaseController {
    
    constructor(context) {
        super(context);
    }
    
    @httpGet()
    @httpAction('index')
    getIndex() {
        return Promise.resolve(this.view());
    }
}