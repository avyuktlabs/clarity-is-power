import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, LabelList, ComposedChart, Scatter } from "recharts";

const fmtMin = (t: number) => `${t} min`;

// Clinical Timeline
const timeline = [
  { label: "Arrival & triage", start: 0, duration: 7 },
  { label: "First model score 0.61", start: 7, duration: 11 },
  { label: "Model-positive 0.66 (queued)", start: 18, duration: 12 },
  { label: "Second score 0.70 (page sent)", start: 30, duration: 7 },
  { label: "Acknowledged", start: 37, duration: 5 },
  { label: "Antibiotics ordered", start: 42, duration: 2 },
];

const timelineRows = timeline.map((e, idx) => ({
  id: idx + 1,
  stage: e.label,
  prefix: e.start,
  segment: e.duration,
}));

// Prospective Calibration
const calibration = [
  { p: 0.10, obs: 0.08 },
  { p: 0.20, obs: 0.18 },
  { p: 0.30, obs: 0.26 },
  { p: 0.40, obs: 0.35 },
  { p: 0.50, obs: 0.44 },
  { p: 0.60, obs: 0.52 },
  { p: 0.70, obs: 0.60 },
  { p: 0.80, obs: 0.74 },
  { p: 0.90, obs: 0.85 },
];

// Alert Burden & Queue Depth
const minutes = Array.from({ length: 50 }, (_, i) => i);
const queueSeries = minutes.map((m) => ({
  t: m,
  alerts: m < 10 ? 2 : m < 20 ? 6 : m < 30 ? 12 : m < 40 ? 9 : 4,
  queueDepth: m < 10 ? 0 : m < 20 ? 5 : m < 30 ? 14 : m < 40 ? 10 : 2,
}));

// Precision–Recall
const prPoints = [
  { thresh: 0.50, precision: 0.52, recall: 0.82 },
  { thresh: 0.55, precision: 0.55, recall: 0.79 },
  { thresh: 0.60, precision: 0.58, recall: 0.75 },
  { thresh: 0.65, precision: 0.40, recall: 0.88 },
  { thresh: 0.70, precision: 0.47, recall: 0.70 },
  { thresh: 0.75, precision: 0.54, recall: 0.60 },
];

// Composite Operational Threshold
const thresholdDecomp = [
  { factor: "Model cutoff met", minutes: 0 },
  { factor: "Batching/Queue latency", minutes: 9 },
  { factor: "Device DND window", minutes: 3 },
];

// Protocol Coverage
const protocolCoverage = [
  { criterion: "Suspected infection source", met: 1, pending: 0 },
  { criterion: "Hypotension (MAP < 65)", met: 1, pending: 0 },
  { criterion: "Lactate > 2 mmol/L", met: 1, pending: 0 },
  { criterion: "SOFA delta >= 2", met: 0, pending: 1 },
  { criterion: "Cultures obtained", met: 0, pending: 1 },
];

export const TimelineFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 1. Clinical Timeline (ED Arrival → Acknowledgment → Antibiotics)</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={timelineRows} layout="vertical" margin={{ top: 10, right: 20, left: 40, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickFormatter={fmtMin} domain={[0, 50]} />
          <YAxis type="category" dataKey="stage" width={250} />
          <Tooltip formatter={(v) => fmtMin(Number(v))} />
          <Bar dataKey="prefix" stackId="a" fill="transparent" isAnimationActive={false} />
          <Bar dataKey="segment" stackId="a" fill="hsl(var(--primary))">
            <LabelList dataKey="segment" position="right" formatter={(v) => fmtMin(Number(v))} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const CalibrationFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 2. Prospective Calibration (Week-of-Case)</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={calibration} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="p" tickFormatter={(v) => v.toFixed(2)} label={{ value: "Predicted probability", position: "insideBottomRight", offset: -5 }} />
          <YAxis domain={[0, 1]} label={{ value: "Observed event rate", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="p" name="Ideal (y = x)" stroke="hsl(var(--muted-foreground))" dot={false} />
          <Scatter dataKey="obs" name="Observed" fill="hsl(var(--primary))" />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const AlertBurdenFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 3. Alert Burden and Queue Depth (Per Minute)</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={queueSeries} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" tickFormatter={fmtMin} />
          <YAxis yAxisId="left" label={{ value: "Alerts/min", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Queue depth", angle: -90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="alerts" name="Alerts/min" stroke="hsl(var(--primary))" dot={false} />
          <Line yAxisId="right" type="monotone" dataKey="queueDepth" name="Queue depth" stroke="hsl(var(--chart-2))" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const PrecisionRecallFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 4. Precision–Recall by Threshold (Window 0.50–0.75)</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={prPoints} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="thresh" label={{ value: "Threshold", position: "insideBottomRight", offset: -5 }} />
          <YAxis yAxisId="left" domain={[0, 1]} label={{ value: "Precision", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 1]} label={{ value: "Recall", angle: -90, position: "insideRight" }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="precision" name="Precision" stroke="hsl(var(--primary))" dot />
          <Line yAxisId="right" type="monotone" dataKey="recall" name="Recall" stroke="hsl(var(--chart-2))" dot />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const ThresholdDecompositionFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 5. Components of the Effective Alert Threshold</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={thresholdDecomp} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="factor" />
          <YAxis label={{ value: "Minutes contributed", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="minutes" fill="hsl(var(--primary))">
            <LabelList dataKey="minutes" position="top" formatter={(v) => fmtMin(Number(v))} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const ProtocolCoverageFigure = () => (
  <Card className="my-8">
    <CardHeader>
      <CardTitle className="text-lg">Figure 6. Protocol Criteria Coverage at Acknowledgment</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={protocolCoverage} layout="vertical" margin={{ top: 10, right: 20, left: 40, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 1]} />
          <YAxis type="category" dataKey="criterion" width={260} />
          <Tooltip />
          <Legend />
          <Bar dataKey="met" name="Met" stackId="s" fill="hsl(var(--primary))" />
          <Bar dataKey="pending" name="Pending" stackId="s" fill="hsl(var(--muted))" />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
