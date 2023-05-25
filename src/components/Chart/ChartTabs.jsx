import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ChartTabs = ({ setType }) => {
  const { t } = useTranslation()

  const tabs = [
    {
      title: t('coin.stats.price'),
      value: 'prices',
    },
    {
      title: t('coin.stats.market_cap'),
      value: 'market_caps',
    },
    {
      title: t('coin.stats.total_volume'),
      value: 'total_volumes',
    },
  ]

  return (
    <Tabs>
      <TabList>
        {tabs.map(({ title, value }) => (
          <Tab
            key={value}
            _selected={{ color: '#8884d8' }}
            onClick={() => setType(value)}
          >
            {title}
          </Tab>
        ))}
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#8884d8" borderRadius="1px" />
    </Tabs>
  )
}

export default ChartTabs
