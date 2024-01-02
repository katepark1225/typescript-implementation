import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { ReportingService } from '../../services/reporting'
import { ReportingAnalytics } from '../../interface/reporting'

const Logged_Out = () => {

  const [analytics, setAnalytics] = useState<ReportingAnalytics[]>([])
  useEffect(() => {
    ReportingService(payload)
    .then((data: any) => {
      setAnalytics(data.reverse())
    })
  }, [])

  const calculateHeight = (value: number) => {
    // Code block --!
    return value
  }

  const barChart = analytics !== null && analytics !== undefined && analytics.length > 0 ? (
    analytics.map((row, index) => (
      <View key={index} style={style.chart_pair}>
        <View style={style.chart}>
          <View style={style.chart_txt_wrapper}>
            <Text style={style.chart_txt}>{row.oppo}</Text>
          </View>
          <View style={[style.bar, style.oppo_bar, { minHeight: 10, height: calculateHeight(row.oppo) }]} />
        </View>
        <View style={style.chart}>
          <View style={style.chart_txt_wrapper}>
            <Text style={style.chart_txt}>{row.lead}</Text>
          </View>
          <View style={[style.bar, style.lead_bar, { minHeight: 10, height: calculateHeight(row.lead) }]} />
        </View>
      </View>
    ))
  ) : null

  return (
    <ScrollView>
      {barChart}
    </ScrollView>
  )
}

export default Logged_Out
