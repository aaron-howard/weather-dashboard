import Toggle from "@/components/Toggle";

export type DataStreamStatus = "operational" | "degraded";

export type DataStream = {
  name: string;
  subtitle: string;
  icon: string;
  iconToneClass: string;
  status: DataStreamStatus;
  accuracy: number;
  latency: string;
  enabled: boolean;
};

export const DATA_STREAMS: DataStream[] = [
  {
    name: "OpenWeather",
    subtitle: "v3.0.1 Global Model",
    icon: "cloud_queue",
    iconToneClass: "bg-[#EB6E4B]/10 text-[#EB6E4B]",
    status: "operational",
    accuracy: 94,
    latency: "142ms",
    enabled: true,
  },
  {
    name: "AccuWeather",
    subtitle: "Pro-Level Precision",
    icon: "wb_sunny",
    iconToneClass: "bg-tertiary/10 text-tertiary",
    status: "operational",
    accuracy: 98,
    latency: "88ms",
    enabled: true,
  },
  {
    name: "Weatherbit",
    subtitle: "High Resolution Radar",
    icon: "bolt",
    iconToneClass: "bg-primary/10 text-primary",
    status: "degraded",
    accuracy: 72,
    latency: "412ms",
    enabled: false,
  },
];

export default function DataStreamRow({ stream }: { stream: DataStream }) {
  const isOperational = stream.status === "operational";

  return (
    <tr className="group hover:bg-surface-container-highest/20 transition-colors">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${stream.iconToneClass}`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {stream.icon}
            </span>
          </div>
          <div className="whitespace-nowrap">
            <p className="font-bold text-on-surface">{stream.name}</p>
            <p className="text-xs text-slate-500">{stream.subtitle}</p>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isOperational ? "bg-emerald-500" : "bg-tertiary"
            }`}
          />
          <span
            className={`text-xs font-semibold ${
              isOperational ? "text-emerald-400" : "text-tertiary"
            }`}
          >
            {isOperational ? "Operational" : "Degraded"}
          </span>
        </div>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className={`h-full ${isOperational ? "bg-primary" : "bg-tertiary"}`}
              style={{ width: `${stream.accuracy}%` }}
            />
          </div>
          <span
            className={`text-xs font-bold ${isOperational ? "" : "text-tertiary"}`}
          >
            {stream.accuracy}%
          </span>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className="text-xs font-body text-slate-400">{stream.latency}</span>
      </td>
      <td className="px-8 py-6">
        <Toggle
          defaultChecked={stream.enabled}
          aria-label={`${stream.name} power`}
        />
      </td>
    </tr>
  );
}
