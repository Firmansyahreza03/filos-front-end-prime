import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../api/appconfig';
import { DefaultPic } from '../constant/default-pic';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    config: AppConfig = {
        proImg: DefaultPic.proFile
    };

    private configUpdate = new Subject<AppConfig>();

    onConfigUpdate = this.configUpdate.asObservable();

    getConfig() {
        return this.config;
    }
}
