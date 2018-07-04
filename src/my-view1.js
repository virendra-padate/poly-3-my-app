/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html `
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      
    <!--
      app-route provides the name of the category.
    -->
    <app-route
        route="[[route]]"
        pattern="/:category"
        data="{{routeData}}"></app-route>

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>

        <button on-click="handleApproveClick">Approve</button>
        <button on-click="handleRejectClick">Reject</button>

        <div>{{category}}</div>
      </div>
    `;
  }

  static get properties() {
    return {
      category: Object,
      route: Object,
      routeData: Object,
      visible: {
        type: Boolean,
        value: false
      },
    };
  }

  static get observers() {
    return [
      '_categoryChanged(category, visible)'
    ]
  }

  _categoryChanged(category, visible) {

    if (!visible) {
      return;
    }

    if (category) {
      this.category = category;
    } else {
      this.category = null;
    }

  }

  handleApproveClick(e) {
    this.dispatchEvent(new CustomEvent('approve', {
      bubbles: true,
      composed: true,
      detail: {
        approved: true
      }
    }));
  }

  handleRejectClick(e) {
    this.dispatchEvent(new CustomEvent('reject', {
      bubbles: true,
      composed: true,
      detail: {
        rejected: true
      }
    }));
  }
}

window.customElements.define('my-view1', MyView1);