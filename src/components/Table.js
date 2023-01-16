// If pilot details were inaccessible, display `~unknown~`
const coerce = (value) => (value === null || value === undefined) ? '~unknown~' : value;

const Table = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Pilot name</th>
            <th>Email address</th>
            <th>Phone no.</th>
            <th>Last seen</th>
            <th>Closest distance to nest</th>
          </tr>
        </thead>
        <tbody>
          {
            props.droneEntries.map(droneEntry => {
              return <tr key={droneEntry.serialNumber}>
                <td>{`${coerce(droneEntry.firstName)} ${coerce(droneEntry.lastName)}`}</td>
                <td>{coerce(droneEntry.email)}</td>
                <td>{coerce(droneEntry.phoneNumber)}</td>
                <td>{new Date(droneEntry.timestamp).toLocaleTimeString()}</td>
                <td>{`${Math.round(droneEntry.minDistance)} m`}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Table;
