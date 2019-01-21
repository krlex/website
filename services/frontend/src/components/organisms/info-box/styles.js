const infoBox = {
  width: '100%',
  margin: 5,
  textAlign: 'left',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
}


export default (backgroundColor = null) => {
  const styles = {
    ibox: {
      ...infoBox,
      maxHeight: 64,
      focused: {
        ...infoBox,
        maxHeight: 800,
      },
    },

    content: {
      padding: 40,
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      color: 'rgba(0, 0, 0, 0.4)',
      fontWeight: 'bold',
    },
  }
  if (backgroundColor) {
    styles.toolbar.backgroundColor = backgroundColor
  }
  return styles
}
