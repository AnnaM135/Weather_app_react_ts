import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../store/store";

export const useCustomDispatch = () => useDispatch<AppDispath>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;