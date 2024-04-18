<script lang="ts">
  import {
    Container,
    Nav,
    Navbar,
    NavbarBrand,
  } from "@sveltestrap/sveltestrap";
</script>

<Navbar color="secondary" class="mb-4" dark>
  <NavbarBrand href="/">
    <h3>Library</h3>
  </NavbarBrand>

  <Nav>
    <slot name="header" />
  </Nav>
</Navbar>

<Container fluid>
  <slot />
</Container>
