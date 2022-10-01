import dynamic from "next/dynamic"
import "handsontable/dist/handsontable.min.css";

const HotTable = dynamic(() => import("@handsontable/react"), { ssr: false })
const HotColumn = dynamic(() => import("@handsontable/react").then((i) => i.HotColumn), { ssr: false })

const data = [
  [
    false,
    "Tagcat",
    "United Kingdom",
    "Classic Vest",
    "11/10/2020",
    "01-2331942",
    true,
    "172"
  ],
  [
    true,
    "Zoomzone",
    "Indonesia",
    "Cycling Cap",
    "03/05/2020",
    "88-2768633",
    true,
    "188"
  ]
]

const SimpleTable = () => {
  return (
    <HotTable
      data={data}
      height={450}
      colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97]}
      colHeaders={[
        "Company name",
        "Country",
        "Name",
        "Sell date",
        "Order ID",
        "In stock",
        "Qty",
        "Progress",
        "Rating"
      ]}
      dropdownMenu={true}
      hiddenColumns={{
        indicators: true
      }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      rowHeaders={true}
      manualRowMove={true}
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn data={1} />
      <HotColumn data={2} />
      <HotColumn data={3} />
      <HotColumn data={4} type="date" allowInvalid={false} />
      <HotColumn data={5} />
      <HotColumn data={6} type="checkbox" className="htCenter" />
      <HotColumn data={7} type="numeric" />
    </HotTable>
  )
}

export default SimpleTable
