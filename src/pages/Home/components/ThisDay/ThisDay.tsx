import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/thunks/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={weather.weather[0].main.toLowerCase()} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          City: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
