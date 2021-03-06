/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import merge from "lodash/merge";
import DesktopApplicationTemplateGroup from "./groups/desktop-application-template-group.json";
import MobileApplicationTemplateGroup from "./groups/mobile-application-template-group.json";
import WebApplicationTemplateGroup from "./groups/web-application-template-group.json";
import AndroidMobileApplicationTemplate from "./templates/android-mobile-application/android-mobile-application.json";
import CustomApplicationTemplate from "./templates/custom-application/custom-application.json";
import OIDCWebApplicationTemplate from "./templates/oidc-web-application/oidc-web-application.json";
import SAMLWebApplicationTemplate from "./templates/saml-web-application/saml-web-application.json";
import SinglePageApplicationTemplate from "./templates/single-page-application/single-page-application.json";
import WindowsDesktopApplicationTemplate
    from "./templates/windows-desktop-application/windows-desktop-application.json";
import * as extensionsConfig from "../../../../extensions/config";
import { ApplicationTemplateGroupInterface, ApplicationTemplateListItemInterface } from "../../models";

export interface ApplicationTemplatesConfigInterface {
    groups: ApplicationTemplateGroupConfigInterface[];
    templates: ApplicationTemplateConfigInterface[];
}

export interface ApplicationTemplateConfigInterface {
    enabled: boolean;
    id: string;
    templateObj?: ApplicationTemplateListItemInterface;
}

export interface ApplicationTemplateGroupConfigInterface {
    enabled: boolean;
    id: string;
    templateGroupObj?: ApplicationTemplateGroupInterface;
}

export const getApplicationTemplatesConfig = (): ApplicationTemplatesConfigInterface => {

    return {
        groups: merge([
            {
                enabled: true,
                id: WebApplicationTemplateGroup.id,
                templateGroupObj: WebApplicationTemplateGroup
            },
            {
                enabled: true,
                id: DesktopApplicationTemplateGroup.id,
                templateGroupObj: DesktopApplicationTemplateGroup
            },
            {
                enabled: true,
                id: MobileApplicationTemplateGroup.id,
                templateGroupObj: MobileApplicationTemplateGroup
            }
        ], extensionsConfig()?.templateExtensions?.applications?.groups),
        templates: merge([
            {
                enabled: true,
                id: AndroidMobileApplicationTemplate.id,
                templateObj: AndroidMobileApplicationTemplate
            },
            {
                enabled: true,
                id: OIDCWebApplicationTemplate.id,
                templateObj: OIDCWebApplicationTemplate
            },
            {
                enabled: true,
                id: SAMLWebApplicationTemplate.id,
                templateObj: SAMLWebApplicationTemplate
            },
            {
                enabled: true,
                id: SinglePageApplicationTemplate.id,
                templateObj: SinglePageApplicationTemplate
            },
            {
                enabled: true,
                id: WindowsDesktopApplicationTemplate.id,
                templateObj: WindowsDesktopApplicationTemplate
            },
            {
                enabled: true,
                id: CustomApplicationTemplate.id,
                templateObj: CustomApplicationTemplate
            }
        ], extensionsConfig()?.templateExtensions?.applications?.templates)
    };
};
