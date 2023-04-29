import { WeatherService } from "../../services/WeatherService";
import { currentweatherSlice } from "../slices/currentWeatherSlice";
import { AppDispath } from "../store";

export const fetchCurrentWeather =
  (payload: string) => async (dispatch: AppDispath) => {
    try {
      dispatch(currentweatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      if (res.status === 200) {
        dispatch(currentweatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(currentweatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      throw new Error();
    }
  };
