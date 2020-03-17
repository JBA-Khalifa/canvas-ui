// Copyright 2017-2020 @polkadot/react-query authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/react-api/types';
import { AccountId, AccountIndex, Address, BalanceOf } from '@polkadot/types/interfaces';

import React from 'react';
import { useApi, useCall } from '@polkadot/react-hooks';

import FormatBalance from './FormatBalance';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}

function LockedVote ({ children, className, label, params }: Props): React.ReactElement<Props> {
  const { api } = useApi();
  const stakeOf = useCall<BalanceOf>(api.query.electionsPhragmen.stakeOf, [params]);

  return (
    <FormatBalance
      className={className}
      label={label}
      value={stakeOf}
    >
      {children}
    </FormatBalance>
  );
}

export default React.memo(LockedVote);
