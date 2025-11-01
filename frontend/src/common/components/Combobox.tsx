'use client';

import { useState } from 'react';

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

import { Button } from '@styles/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@styles/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@styles/components/ui/popover';
import { cn } from '@styles/lib/utils';

const LoginComboBox = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const schools = [
    {
      value: 'cau',
      label: '중앙대학교',
    },
    {
      value: 'ewha',
      label: '이화여자대학교',
    },
    {
      value: 'dongduk',
      label: '동덕여자대학교',
    },
    {
      value: 'dankuk',
      label: '단국대학교',
    },
    {
      value: 'hufs',
      label: '한국외국어대학교',
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? schools.find((framework) => framework.value === value)?.label
            : '학교를 선택하세요'}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="학교명 검색" />
          <CommandList>
            <CommandEmpty>해당하는 학교가 존재하지 않습니다.</CommandEmpty>
            <CommandGroup>
              {schools.map((school) => (
                <CommandItem
                  key={school.label}
                  value={school.label}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === school.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {school.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LoginComboBox;
