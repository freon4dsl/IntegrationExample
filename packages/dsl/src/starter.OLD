import { ServerCommunication } from "@freon4dsl/core";
import { FreonLayout, setDevelopment, WebappConfigurator } from "@freon4dsl/webapp-lib";
import { configureExternals } from "./external/externals.js";
import { LanguageEnvironment } from "./freon/index.js";
import { configureLoggers } from "./loggers.js";
// import { LionWebRepositoryCommunication } from "@freon4dsl/core"

/**
 * Initialize everything
 */
WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());
setDevelopment(true)
configureExternals()
configureLoggers()

/**
 * Now start the app ...
 */
const app = new FreonLayout({
    target: document.body,
});
export default app;
