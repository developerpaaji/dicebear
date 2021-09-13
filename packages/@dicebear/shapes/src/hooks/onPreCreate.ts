import { Prng, StyleOptions } from '@dicebear/core';

import { Options } from '../options';

type Props = { prng: Prng; options: StyleOptions<Options>; preview: boolean };

export function onPreCreate({ prng, options, preview }: Props) {
  const pickModifier = <T extends string>(
    modifier: T[] = [],
    alreadyPicked: T[] = []
  ): T[] => {
    const pickItems = modifier.filter(
      (v) => false === alreadyPicked.includes(v) && v === 'none'
    );
    const pick = prng.pick(pickItems.length ? pickItems : modifier);

    return pick ? [pick] : [];
  };

  options.centerModifier = pickModifier(options.centerModifier);
  options.sidesModifier = pickModifier(options.sidesModifier, [
    options.centerModifier[0],
  ]);
  options.cornersModifier = pickModifier(options.cornersModifier, [
    options.centerModifier[0],
    options.sidesModifier[0],
  ]);
}