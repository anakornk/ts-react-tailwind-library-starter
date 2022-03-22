import { Switch } from '@headlessui/react';

export type ToggleSwitchProps = {
  enabled: boolean;
  onChange: (value: boolean) => void;
};

export function ToggleSwitch({ enabled, onChange }: ToggleSwitchProps) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
}
