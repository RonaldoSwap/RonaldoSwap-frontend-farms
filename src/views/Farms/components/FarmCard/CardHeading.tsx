import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@saltswap/uikit'
import { RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, risk, farmImage, tokenSymbol }) => (
  <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
    <Image src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />
    <Flex flexDirection="column" alignItems="flex-end">
      <Heading mb="4px">{lpLabel}</Heading>
      <Flex justifyContent="center">
        {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
        <RiskTag risk="2" />
        <MultiplierTag variant="secondary">40x</MultiplierTag>
      </Flex>
    </Flex>
  </Wrapper>
)

export default CardHeading
