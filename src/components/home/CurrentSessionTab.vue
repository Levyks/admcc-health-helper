<template>
  <div class="relative-position full-height flex column justify-between">
    <div class="header">
      <h3>Ortopedia</h3>
      <span>Clínica Saúde+</span>
    </div>
    <section class="eta">
      <strong class="top-text">Tempo estimado</strong>
      <div class="circle">
        <strong>15</strong>
        <span>min</span>
      </div>
      <span class="bottom-text">3 pessoas na sua frente</span>
    </section>
    <div class="bottom-info">
      <h5>Dr. Fulano da Silva</h5>
      <strong>Consultório 7</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.eta {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;

  .top-text {
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    display: block;
    width: 100%;
  }

  .bottom-text {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 1rem;
    display: block;
    width: 100%;
  }

  .circle {
    margin: 0 auto;
    width: min(200px, 80vw);
    height: min(200px, 80vw);
    background-color: var(--q-primary);
    border-radius: 50%;
    color: white;
    position: relative;

    strong {
      font-size: 6rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    span {
      font-size: 1.5rem;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
  }
}

.header {
  text-align: center;
  h3 {
    margin: 0.5rem 0;
    font-weight: normal;
  }

  span {
    font-size: 1rem;
  }
}

.bottom-info {
  text-align: center;
  h5 {
    margin: 0.5rem 0;
  }

  strong {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
}
</style>
