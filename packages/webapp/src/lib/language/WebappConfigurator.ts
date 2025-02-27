import {
  type FreEnvironment,
  FreLanguage,
  FreLogger,
  FreProjectionHandler,
  FreUndoManager,
  InMemoryModel,
  type IServerCommunication
} from '@freon4dsl/core';
import { replaceProjectionsShown } from "$lib/stores/Projections.svelte.js";
import { langInfo } from "$lib/stores/LanguageInfo.svelte.js";
import { runInAction } from "mobx";

const LOGGER: FreLogger = new FreLogger('Webapp');

/**
 * Web configuration singleton.
 */
export class WebappConfigurator {
  private static instance: WebappConfigurator;

  static getInstance(): WebappConfigurator {
    if (
      WebappConfigurator.instance === null ||
      WebappConfigurator.instance === undefined
    ) {
      WebappConfigurator.instance = new WebappConfigurator();
    }
    return WebappConfigurator.instance;
  }

  serverCommunication: IServerCommunication | undefined;
  editorEnvironment: FreEnvironment | undefined;
  private modelStore: InMemoryModel | undefined;

  /**
   * Sets the object that will perform the communication with the server, and
   * the language environment, so the webapp knows all information of the language.
   * @param editorEnvironment
   * @param serverCommunication
   */
  setEnvironment(
    editorEnvironment: FreEnvironment,
    serverCommunication: IServerCommunication,
  ): void {
    // LOGGER.log('setEnvironment')
    this.editorEnvironment = editorEnvironment;
    this.serverCommunication = serverCommunication;
    WebappConfigurator.initialize(editorEnvironment);
    this.modelStore = new InMemoryModel(editorEnvironment, serverCommunication);
    // this.modelStore.addCurrentModelListener(this.modelChanged);
  }

  async setUnitInEditor() {
    if (!!this.modelStore) {
      this.modelStore
        .createModel("newModel")
        .then(() => {
          this.modelStore!.createUnit("myUnit", langInfo.unitTypes[0]);
        })
        .then(() => {
          runInAction(() => {
            if (!!this.editorEnvironment) {
              this.editorEnvironment.editor.rootElement =
                this.modelStore!.getUnitByName("myUnit");
            }
          });
        });
    }
  }

  /**
   * Fills the Webapp Stores with initial values that describe the language,
   * and make sure that the editor is able to get user message to the webapp.
   */
  static initialize(editorEnvironment: FreEnvironment): void {
    let langEnv: FreEnvironment = editorEnvironment;
    // the language name
    langInfo.name = langEnv.languageName;

    // the names of the unit types
    langInfo.unitTypes = FreLanguage.getInstance().getUnitNames();

    // the names of the projections / views
    const proj: FreProjectionHandler = langEnv.editor.projection;
    let nameList: string[] = !!proj ? proj.projectionNames() : ["default"];
    // remove any old values
    langInfo.projectionNames.splice(0, langInfo.projectionNames.length);
    // push the right ones
    langInfo.projectionNames.push(...nameList);
    replaceProjectionsShown(nameList);

    // the file extensions for all unit types
    // because 'langEnv.fileExtensions.values()' is not an Array but an IterableIterator,
    // we transfer the value to a tmp array.
    const tmp: string[] = [];
    for (const val of langEnv.fileExtensions.values()) {
      tmp.push(val);
    }
    langInfo.fileExtensions = tmp;

    // let the editor know how to set the user message,
    // we do this by assigning our own method to the editor's method
    // langEnv.editor.setUserMessage = setUserMessage;

        // start the undo manager
        FreUndoManager.getInstance();
    }
}
