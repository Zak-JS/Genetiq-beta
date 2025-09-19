import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./Contexts/ThemeContext";
import "./i18n/i18n";
import "./Styles/theme.scss";
import "./Styles/Global.scss";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ThemeProvider>
			<StrictMode>
				<App />
				<ToastContainer />
			</StrictMode>
		</ThemeProvider>
	</Provider>,
);
